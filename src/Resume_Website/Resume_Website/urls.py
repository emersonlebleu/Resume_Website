"""Resume_Website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from pages.views import about_view, contact_view, resume_view, about_view, projects_view, articles_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('about/', about_view, name='about_view'),
    path('articles/', articles_view, name='articles_view'),
    path('contact/', contact_view, name='contact_view'),
    path('projects/', projects_view, name='projects_view'),
    path('resume/', resume_view, name='resume_view'),
]
