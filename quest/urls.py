from django.urls import path
from .views import TaskListCreate, TaskRetrieveUpdateDestroy, QuestListCreate, QuestRetrieveUpdateDestroy,ActivityListCreate,ActivityRetrieveUpdateDestroy,QuestDetail,QuestListWithDetails

urlpatterns = [
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('tasks/<uuid:pk>/', TaskRetrieveUpdateDestroy.as_view(), name='task-retrieve-update-destroy'),
    path('activity/', ActivityListCreate.as_view(), name='activity-list-create'),
    path('activity/<uuid:pk>/', ActivityRetrieveUpdateDestroy.as_view(), name='activity-retrieve-update-destroy'),
    path('quests/', QuestListCreate.as_view(), name='quest-list-create'),
    path('quests/<uuid:pk>/', QuestRetrieveUpdateDestroy.as_view(), name='quest-retrieve-update-destroy'),
    path('quest/', QuestListWithDetails.as_view(), name='quest-list-with-details'),
    path('quest/<uuid:pk>/', QuestDetail.as_view(), name='quest-detail')
]
