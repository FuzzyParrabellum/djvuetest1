# EN - english version

This is a django-vue integration example, backend folder for django and frontend folder for vue.
It uses the django-vue basic tutorial from https://realpython.com/python-django-blog/ as an inspiration for the models and the features.

## Useful commands

### pip-tools as package manager

To add new libraries/packages to backend project, write them into
backend/requirements/base_requirements.in
Then use this command to compile these requirements with pip-tools,
and creating a new backend/requirements/base_requirements.txt file
that we can use to install our latest requirements.
`pip-compile requirements/base_requirements.in -o requirements/base_requirements.txt`

Then to install the new packages :
`pip install -r requirements/base_requirements.txt`
