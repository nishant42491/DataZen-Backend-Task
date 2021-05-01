from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
from django.views.generic.base import TemplateView
from django.views.generic import ListView,DetailView
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from django.urls import reverse_lazy
from .models import Post,Quiz
from collections import Counter


def ut(request):
    Quiz.objects.all().delete()
    print("in request")
    un=str(request.user.username)
    qa=[]
    print(qa)
    for i in range(1,11):
        m=str(i)
        qa.append(request.POST['q{}'.format(m)])
                  
    ff=qa[0:5]
    ll=list(qa[5:])
    lo=dict(Counter(ff))
    lh=dict(Counter(ll))
    max_key1 = max(lo, key=lo.get)
    max_key2 = max(lh, key = lh.get)
    dk={"ae":"Artisan",
        "af":"Alchemist",
        "ag":"TrailBlazer",
        "ah":"Babelian",
        "be":"Architect",
        "bg":"Catalyst",
        "bh":"Mastermind",
        "bf":"Cruncher",
        "cf":"Champion",
        "ce":"Evangelist",
        "cg":"Visionary",
        "ch":"Advocate",
        "df":"GroundBraker",
        "de":"Wrangler",
        "dg":"Warlock",
        "dh":"Fisherman",
        }


    


   
    description1=dk[max_key1+max_key2]
    b4 = Quiz( user=un,firstfive=max_key1,lastfive=max_key2,remark=description1)
    b4.save()

    return render(request,'quiz_detail.html')
                  


                  
                  

                  
                  
                  
    
class BlogListView(LoginRequiredMixin,ListView):
    model = Post
    template_name = 'blogs.html'
    
class BlogDetailView(LoginRequiredMixin,DetailView): 
    model = Post
    template_name = 'post_detail.html'
    
class BlogCreateView(LoginRequiredMixin,CreateView): 
    model = Post
    template_name = 'post_new.html'
    fields = ['title', 'author', 'body']

    
class BlogUpdateView(LoginRequiredMixin,UpdateView): 
    model = Post
    template_name = 'post_edit.html'
    fields = ['title', 'body']


class BlogDeleteView(LoginRequiredMixin,DeleteView): 
    model = Post
    template_name = 'post_delete.html'
    success_url = reverse_lazy('home')

class HomePageView(TemplateView):
    template_name='home.html'

class QuizPageView(LoginRequiredMixin,TemplateView):
    
    template_name='quiz.html'


class ResultView(LoginRequiredMixin,ListView) :
    model = Quiz
    template_name='results.html'
    


