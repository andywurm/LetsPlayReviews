from django.urls import path
from .views import GamesView

urlpatterns = [
    # path('', NumbersView.as_view()),
    path('game-list', GamesView.as_view())
]