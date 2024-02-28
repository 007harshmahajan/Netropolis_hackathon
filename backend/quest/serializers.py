from rest_framework import serializers
from .models import Task, Quest,Activity
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class QuestSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(queryset=Task.objects.all(), many=True)
    activity  = serializers.PrimaryKeyRelatedField(queryset=Activity.objects.all(), many=True) 

    class Meta:
        model = Quest
        fields = '__all__'

    def create(self, validated_data):
        tasks_data = validated_data.pop('tasks', [])  # Extract tasks data
        activity_data = validated_data.pop('activity', [])
        quest = Quest.objects.create(**validated_data)  # Create quest instance
        
        # Add associated tasks to the quest
        for task_data in tasks_data:
            quest.tasks.add(task_data)
        for activity_data in activity_data:
            quest.activity.add(activity_data)
        return quest