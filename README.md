# EN - english version

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
