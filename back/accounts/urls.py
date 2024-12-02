from django.urls import path

from accounts.views import UserView, SignInView, SignUpView

urlpatterns = [
    path('signup', SignUpView.as_view(), name='signup'),
    path('signin', SignInView.as_view(), name='signin'),
    path('profile', UserView.as_view(), name='profile'),
]
