from django.urls import path
from .views import UserList,AuthUserLoginView

urlpatterns = [
    path('register/',UserList.as_view(),name='register'),
    path('login/',AuthUserLoginView.as_view(),name='login')

]
