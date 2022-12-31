Frontend

1. make the login page work
2. allow the `/secure` page to be only accessible to authenticated user
3. display the logged in user firstname and lastname on homepage onced logged in and allow that to be updated


postgres questions

1. what is does RLS or row level security means?
	- RLS helps you implement restrictions on data row access. For example, you can ensure that workers access only those data rows that are pertinent to their department. Another example is to restrict customers' data access to only the data relevant to their company.
	- The access restriction logic is located in the database tier rather than away from the data in another application tier. The database system applies the access restrictions every time that data access is attempted from any tier. This makes your security system more reliable and robust by reducing the surface area of your security system.
2. does postgres support RLS?
3. Say for example we an app that uses postgres and has these 2 tables, `user` and `account` with fields like account name, owner, etc. whenever new user is created, it should create also an account record for that user. if you were to work on this feature, how would you implement it?