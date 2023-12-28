from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index, name='home'),
    path('about-us/',views.about, name='about'),
    path('product/',views.product, name='product'),
    path('contact/',views.contact, name='contact'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)