from email import message
from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.TextField(max_length=80)
    email = models.EmailField()
    message = models.TextField()