from django.shortcuts import render

def index(request):
    return render(request, 'website/index.html', {})
    
def product(request):
    return render(request, 'website/product.html', {})
    
def contact(request):
    return render(request, 'website/contact.html', {})
    
def about(request):
    return render(request, 'website/about.html', {})
    
