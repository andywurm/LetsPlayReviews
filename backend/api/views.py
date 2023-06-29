from .models import Game
from .serializers import GamesSerializer
from rest_framework import generics

# Create your views here.
class GamesView(generics.CreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GamesSerializer