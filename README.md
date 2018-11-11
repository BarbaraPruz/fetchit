# fetchit
small test app to demonstrate how fetch deals with different http status codes. App uses Rails backend to send http responses with different status codes.  Front end is React with Redux.

*Installation Instructions
-------------------------
Fork and clone this GIT repo. 
Set up backend by running bundle install
Set up frontend by going to client folder and running npm install

*Running fetchit
------------------   
rake start

On webpage, select status code you want to receive and if you want the app to explicitly
call response.ok before processing response payload. You can also select an invalid route
to see that behavior. (see client/actions/test.js for fetch calls)


*Contributing
------------
Bug reports and pull requests are welcome on GitHub at https://github.com/'BarbaraPruz'/news4u. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

*License
-------
Open source under the terms of the MIT License.

*Code of Conduct
---------------
Everyone interacting in the ike project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.


