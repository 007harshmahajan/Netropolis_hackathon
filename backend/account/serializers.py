from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import update_last_login

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["email","first_name", "last_name","password" ,"username", "role",'phone_number']
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            role=validated_data['role'],
            phone_number=validated_data['phone_number']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)
    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)

    def validate(self, data):
        email = data['email']
        password = data['password']
        user = authenticate(email=email, password=password)

        if user is None:
            raise serializers.ValidationError("Invalid login credentials")

        try:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)

            update_last_login(None, user)
            validation = {
                'access': access_token,
                'refresh': refresh_token,
                'email': user.email,
                "password": user.password,
                'role': user.role,
            }

            return validation
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid login credentials")