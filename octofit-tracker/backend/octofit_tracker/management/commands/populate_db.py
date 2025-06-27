"""
This management command adds test data to the database for the OctoFit app.
"""
from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data.'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # USERS
        users = [
            User(email='octavia@mergington.edu', name='Octavia Coach', password='octavia123', team='OctoFit', is_coach=True),
            User(email='sam@mergington.edu', name='Sam Student', password='sam123', team='OctoFit', is_coach=False),
            User(email='jordan@mergington.edu', name='Jordan Student', password='jordan123', team='OctoFit', is_coach=False),
            User(email='alex@mergington.edu', name='Alex Student', password='alex123', team='OctoFit', is_coach=False),
        ]
        User.objects.bulk_create(users)

        # TEAMS
        teams = [
            Team(name='OctoFit', members=['sam@mergington.edu', 'jordan@mergington.edu', 'alex@mergington.edu'], coach='octavia@mergington.edu'),
        ]
        Team.objects.bulk_create(teams)

        # WORKOUTS
        workouts = [
            Workout(workout_id='w1', name='Pushups', description='Do 20 pushups', duration=10, points=5),
            Workout(workout_id='w2', name='Running', description='Run 1 mile', duration=20, points=10),
            Workout(workout_id='w3', name='Jump Rope', description='Jump rope for 5 minutes', duration=5, points=3),
        ]
        Workout.objects.bulk_create(workouts)

        # ACTIVITIES
        activities = [
            Activity(activity_id='a1', user_email='sam@mergington.edu', type='Pushups', duration=10, date=timezone.now(), points=5),
            Activity(activity_id='a2', user_email='jordan@mergington.edu', type='Running', duration=20, date=timezone.now(), points=10),
            Activity(activity_id='a3', user_email='alex@mergington.edu', type='Jump Rope', duration=5, date=timezone.now(), points=3),
        ]
        Activity.objects.bulk_create(activities)

        # LEADERBOARD
        leaderboard = [
            Leaderboard(leaderboard_id='l1', team='OctoFit', points=18),
        ]
        Leaderboard.objects.bulk_create(leaderboard)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully!'))
