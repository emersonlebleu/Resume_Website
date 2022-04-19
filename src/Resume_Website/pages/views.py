from django.shortcuts import render
import mimetypes

# Create your views here.
def about_view(request):
    return render(request, 'about.html', {})

def articles_view(request):
    return render(request, 'articles.html', {})    

def contact_view(request):
    return render(request, 'contact.html', {})

def projects_view(request):
    return render(request, 'projects.html', {})
    
# def resume_download(request):
#     return render(request, "Emerson's Resume (18APR2022).docx", {})