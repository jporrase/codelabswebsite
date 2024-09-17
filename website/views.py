from django.shortcuts import render, redirect
from django.core.mail import send_mail

def index(request):
    return render(request, 'website/index.html', {})
    
def product(request):
    return render(request, 'website/product.html', {})
    
def contact(request):
    return render(request, 'website/contact.html', {})
    
def about(request):
    return render(request, 'website/about.html', {})

def projects(request):
    return render(request, 'website/projects.html')

def send_email(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        # Send email using Gmail SMTP
        send_mail(
            f"New message from {name}",  # Subject
            f"Message: {message}\n\nFrom: {email}",  # Message content
            'contact-us@codelacademy.com',  # From email (same as your Gmail)
            ['contact-us@codelacademy.com'],  # To email (same email to send to itself)
            fail_silently=False,
        )
        return redirect('success')  # Redirect to a success page
    return render(request, 'contact.html')

def success(request):
    return render(request, 'website/success.html')
