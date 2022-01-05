from django.urls import path
from .views import ListingsView, ListingView, SearchView, VacantView

urlpatterns = [
    path('', ListingsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ListingView.as_view()),
    path('vacant', VacantView.as_view()),
]