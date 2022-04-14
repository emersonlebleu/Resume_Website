from cgitb import text
from datetime import date
from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.TextField(max_length=200)
    text = models.TextField()
    date = models.DateField()
    topic = models.TextField(max_length=200)