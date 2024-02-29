from django.views import View
from django.http import JsonResponse
from .models import Quest
from django.core import serializers

class SearchView(View):
    def get(self, request):
        query = request.GET.get('q', '')
        if query:
            quests = Quest.objects.filter(title_icontains=query) | Quest.objects.filter(description_icontains=query)
        else:
            quests = Quest.objects.all()
        quests_json = serializers.serialize('json', quests)
        return JsonResponse({'quests': quests_json})