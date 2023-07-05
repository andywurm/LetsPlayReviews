from django.db import models
from datetime import date

# Create your models here.
class Tag(models.Model):
    genre = models.CharField(max_length=50,unique=True)

class Imgs(models.Model):
    photo = models.CharField(max_length=50,unique=True)

class Review(models.Model):
    username = models.CharField(max_length=50)
    date = models.DateField(auto_now_add=True,default=date.today)
    userRating = models.DecimalField(default=0,max_digits=2, decimal_places=1)
    comment = models.CharField(max_length=1000)

class Game(models.Model):
    title = models.CharField(max_length=50)
    imgs = models.OneToOneField(Imgs, on_delete=models.CASCADE)
    release = models.CharField(max_length=50)
    rating = models.DecimalField(default=0,max_digits=2, decimal_places=1)
    description = models.CharField(max_length=500)
    system = models.CharField(max_length=50)
    tags = models.ManyToManyField(Tag)
    reviews = models.OneToOneField(Review,on_delete=models.CASCADE)

class User(models.Model): 
    username = models.CharField(max_length=50,unique=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=50)