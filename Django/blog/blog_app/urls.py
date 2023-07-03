from django.urls import path
from .views import BlogListView, Blogging, BlogCreate
# from .views import BlogDetailView

urlpatterns = [
    path('', BlogListView.as_view(), name="home"),
    path('post/<int:pk>/', Blogging.as_view(), name="post_detail"),
    path('post/new/', BlogCreate.as_view(), name="post_new")
]