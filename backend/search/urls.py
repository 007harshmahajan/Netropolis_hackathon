
from django.urls import path,include
from .views import SearchView
urlpatterns = [
    path('api/search',SearchView.as_view(),name='search')
]
