from django.urls import path
from .views import ut,ResultView,BlogListView,BlogDetailView,BlogCreateView,BlogUpdateView,BlogDeleteView,HomePageView,QuizPageView
urlpatterns = [
path('post/<int:pk>/edit/',BlogUpdateView.as_view(), name='post_edit'), 
path('post/new/', BlogCreateView.as_view(), name='post_new'), 
path('blogs/', BlogListView.as_view(), name='blogs'),
path('post/<int:pk>/', BlogDetailView.as_view(), name='post_detail'),
path('post/<int:pk>/delete/', BlogDeleteView.as_view(), name='post_delete'),
path('',HomePageView.as_view(),name='home'),
path('quiz/',QuizPageView.as_view(),name='quiz'),
path('quiz/detail/',ut,name='quiz_detail'),
path('quiz/result/',ResultView.as_view(),name='results')
]
