# Models for OctoFit Tracker (MongoDB collections)
from djongo import models

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)
    team = models.CharField(max_length=100, blank=True, null=True)
    is_coach = models.BooleanField(default=False)
    class Meta:
        db_table = 'users'

class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    members = models.JSONField(default=list)
    coach = models.CharField(max_length=100)
    class Meta:
        db_table = 'teams'

class Activity(models.Model):
    activity_id = models.CharField(max_length=100, unique=True)
    user_email = models.EmailField()
    type = models.CharField(max_length=100)
    duration = models.IntegerField()
    date = models.DateTimeField()
    points = models.IntegerField(default=0)
    class Meta:
        db_table = 'activity'

class Leaderboard(models.Model):
    leaderboard_id = models.CharField(max_length=100, unique=True)
    team = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    class Meta:
        db_table = 'leaderboard'

class Workout(models.Model):
    workout_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField()
    points = models.IntegerField(default=0)
    class Meta:
        db_table = 'workouts'
