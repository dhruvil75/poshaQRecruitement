# poshaQRecruitement
Recruitment Process for year 2018

<h2> Task - 2</h2>
<h3> -> Rational for chosing the nested database schema </h3> 
The database Schema has been chosen to occupy as less space as possible, the trade off for that is marginally higher computaion cost during move_task API.
<h3> REST API </h3>
I do not consider these API end points to be REST APIs. Due to the given endpoints in the task itself, i could not use the practices suggested for creating REST APIs.
<h3> Error Codes Used </h3>
<pre>
200 - Request Successful
400 - Request Error
404 - Resource Not found
500 - Internal Server
</pre>

<h3> API DOC</h3>
<pre>
1. POST	/api/create_label/
	- Inserts label to the database with the given name
	req.body = {
		"label":"important"
	}
	response = {
		"_id": "5b8486b23fe5691718258192",
		"label": "important",
		"tasks": [],
		"__v": 0
	}
2. DELETE /api/delete_label/5b83fd47a387741bd8088264	(Label Object Id)
	- Deletes the label specified by the object ID
	response = {
    	"object_deleted_id": "5b8486b23fe5691718258192"
	}
3. PUT /api/update_label/5b8486b23fe5691718258192 (Label Object Id)
	- Updates the Label Name of the label specified by the Label Object ID
	req.body = {
		"label":"can be done later"
	}
	response = {
		"_id": "5b8486b23fe5691718258192",
		"label": "can be done later",
		"tasks": [],
		"__v": 0
	}
4. POST /api/create_task/5b842da2b5b3931b802eeb8d	(Label Object Id)
	- Create task for label specified by Label Object Id
	req.body = {
		"task":"New Episode of The Preachers"
	}
	response = {
		"_id": "5b842da2b5b3931b802eeb8d",
		"label": "not as important",
		"tasks": [
			{
				"_id": "5b842e45b5b3931b802eeb92",
				"task": "Watch Peeky Blinders"
			},
			{
				"_id": "5b842e51b5b3931b802eeb93",
				"task": "New Episode of The Preachers"
			}
		],
		"__v": 1
	}
5. DELETE /api/delete_task/5b8405b2b5968616441a0e9a (Task Object Id)
	- Deleteing the task specified by Task Object Id, you need not specify what label that task belongs to.
	response = {
		"_id": "5b8405236bf2cd28cc18017c",
		"label": "done",
		"tasks": [
			{
				"_id": "5b8405c5b5968616441a0e9b",
				"task": "Posahq Task"
			}
		],
		"__v": 2
	}
6. PATCH /api/update_task/5b8405c5b5968616441a0e9e
	- Updates the task specified by task Object ID with a new name. User need not to specify what label group it belongs to.
	req.body = {
		"task":"tasks no one cares about"
	}
	response = {
    	"task_modified_id": "5b842e45b5b3931b802eeb92"
	}
7. PATCH api/move_task/
	- Moves an array of tasks to a specific label
	req.body = {
		"taskId":["5b842e51b5b3931b802eeb93"],
		"labelId":"5b842d93b5b3931b802eeb8b"
	}
	response = {
		"_id": "5b842d93b5b3931b802eeb8b",
		"label": "done",
		"tasks": [
			{
				"_id": "5b842dc4b5b3931b802eeb8e",
				"task": "Task 2 done"
			},
			{
				"_id": "5b842df5b5b3931b802eeb8f",
				"task": "Dota 2 1.9k MMR"
			},
			{
				"_id": "5b842e51b5b3931b802eeb93",
				"task": "New Episode of The Preachers"
			}
		],
		"__v": 2
	} 
</pre>
	
