from rest_framework import generics
from rest_framework.response import Response
from .models import Task, Quest, Activity
from .serializers import TaskSerializer, QuestSerializer, ActivitySerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
class ActivityListCreate(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class ActivityRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class QuestListCreate(generics.ListCreateAPIView):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer

class QuestRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        quest = serializer.save()
        
        # Process selected tasks and activity  and associate them with the quest
        selected_task_ids = request.data.getlist('tasks', [])
        selected_tasks = Task.objects.filter(id__in=selected_task_ids)
        quest.tasks.add(*selected_tasks)
        
        selected_activity_ids = request.data.getlist('activity ', [])
        selected_activity  = Activity.objects.filter(id__in=selected_activity_ids)
        quest.activity.add(*selected_activity )
        
        return Response(QuestSerializer(quest).data)
