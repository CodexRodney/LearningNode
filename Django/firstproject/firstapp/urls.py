from django.urls import path
from firstapp import views

urlpatterns = [
    path('', views.hello_world) # ask Egesa why we pass the keyword argument name
]