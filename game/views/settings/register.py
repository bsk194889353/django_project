from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from game.models.player.player import Player


class PlayerView(APIView):
    def post(self,request):
        
    
        data = request.POST
        username = data.get("username", "").strip()
        password = data.get("password", "").strip()
        password_confirm = data.get("password_confirm", "").strip()
        print(username)
        if not username or not password:
            return Response({
                'result':request.GET.get("username")
            })
        if password != password_confirm:
            return Response({
                'result': "两个密码不一致",
            })
        if User.objects.filter(username=username).exists():
            return Response({
                'result': "用户名已存在"
            })
        user = User(username=username)
        user.set_password(password)
        user.save()
        Player.objects.create(user=user, photo="https://cdn.acwing.com/media/user/profile/photo/355448_sm_2015d90652.jpg")
        return Response({
            'result': "success",
        })

