from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
	print(' ')
	data = json.loads(request.body)  
	nodestring = 'from nodejs',data
	print('-------------------------')
	print(nodestring)
	print(' ')
	val1 = data["values"]["value1"]
	val2 = data["values"]["value2"]
	totalvalue = val1+val2;
	totalString = 'sent ',totalvalue
	print(totalString)
	print(' ')
	return HttpResponse(totalvalue)