from django.conf.urls import include, url

urlpatterns = [
	url(r'^rest_test/',include('rest_test.urls'))
]