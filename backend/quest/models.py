from django.db import models
import uuid
import json

class Task(models.Model):
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(max_length=100)
    user = models.CharField(max_length=100)  # Adjust User model name
    image = models.TextField()
    description = models.TextField()

    # Reward system details
    reward_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Adjust precision as needed

    # Location details
    address = models.TextField()

    # Date and time details
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    duration = models.DurationField(null=True, blank=True)  # Use timedelta for flexible durations

    # Other fields (feel free to add more)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relationships (consider adding as needed)
    # ...

    def __str__(self):
        return f"Task {self.id} - {self.description}"

class Activity(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(max_length=100)
    user = models.CharField(max_length=100) # Adjust User model name
    image = models.TextField()
    description = models.TextField()

    # Reward system details
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Adjust precision as needed

    # Location details
    address = models.TextField()

    # Date and time details
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    duration = models.DurationField(null=True, blank=True)  # Use timedelta for flexible durations

    # Other fields (feel free to add more)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relationships (consider adding as needed)
    # ...

    def __str__(self):
        return f"Task {self.id} - {self.description}"

    
class Quest(models.Model):
    quest_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    tasks = models.ManyToManyField(Task)
    activity = models.ManyToManyField(Activity)
    user_resgistered = models.CharField(max_length=100,null=True) # Adjust User model name

    
