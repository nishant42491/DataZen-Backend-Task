from django.db import models
from django.urls import reverse
from django.conf import settings

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE,
    )
    body = models.TextField()
    def __str__(self):
        return self.title[0:50]

    def get_absolute_url(self):
        return reverse('post_detail', args=[str(self.id)])
        

class Quiz(models.Model):
    user=models.CharField(max_length=200,default='nishant')
    firstfive=models.CharField(max_length=200,default='b')
    lastfive=models.CharField(max_length=200,default='e')
    remark=models.CharField(max_length=200,default='Architect')
    def __str__(self):
        return self.remark[0:50]

    def get_absolute_url(self):
        return reverse('home')
        
