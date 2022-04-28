from django.shortcuts import render
import mimetypes

# Create your views here.
def about_view(request):
    return render(request, 'about.html', {}) 

def contact_view(request):
    return render(request, 'contact.html', {})

def projects_view(request):
    return render(request, 'projects.html', {})
    
def resume_view(request):
    return render(request, 'resume.html', {})