from django.contrib import admin

from coreapps.users.models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    model = User
