from django.contrib import admin
from .models import Task, Quest, Activity

# Register your models here.
admin.site.register(Task)
admin.site.register(Activity)
admin.site.register(Quest)