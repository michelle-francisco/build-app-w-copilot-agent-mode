# Tests for OctoFit Tracker
from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email='test@example.com', name='Test User', password='pass')
        self.assertEqual(user.email, 'test@example.com')

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='Team A', coach='Coach A')
        self.assertEqual(team.name, 'Team A')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        activity = Activity.objects.create(activity_id='act1', user_email='test@example.com', type='run', duration=30, points=10)
        self.assertEqual(activity.type, 'run')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        leaderboard = Leaderboard.objects.create(leaderboard_id='lb1', team='Team A', points=100)
        self.assertEqual(leaderboard.points, 100)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(workout_id='w1', name='Pushups', description='Do pushups', duration=10, points=5)
        self.assertEqual(workout.name, 'Pushups')
