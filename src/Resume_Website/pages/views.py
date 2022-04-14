from django.shortcuts import render

# Create your views here.
def base_view(request):
    return render(request, 'base.html', {})
    
def resume_view(request):
    return render(request, 'resume.html', {})

def contact_view(request):
    return render(request, 'contact.html', {})