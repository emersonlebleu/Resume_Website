from nturl2path import url2pathname
from unicodedata import name
from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.TextField()
    url = models.URLField()
    desciption = models.TextField()
    authors = models.TextField(max_length=50)