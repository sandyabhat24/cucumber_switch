package Pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class DatabasePage {
	String columnValue = null;
	 Connection connection = null;
	 Statement statement = null;
	 ResultSet rs = null; 
	 public String getData(String columnName) throws SQLException {
	  try {   
	   //setting properties for mysql
	   Class.forName("com.mysql.cj.jdbc.Driver");
	   String sqlUrl = "jdbc:mysql://localhost:3306/techfios";
	   String sqlUsername = "root";
	   String sqlPassword = "root";
	   String query = "Select * from users";   
	   //Create connection to local database
	  // connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPassword);
	   connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPassword);  
	   //Empowering the connection reference variable to execute queries
	   statement = connection.createStatement();   
	   //Delivering the query
	      rs = statement.executeQuery(query);
	   while(rs.next()) {
	     columnValue = rs.getString(columnName);
	   return columnValue;
	   }

	  } catch (Exception e) {
	   e.printStackTrace();
	  } finally {
	   if (rs != null) {
	    rs.close();
	   }
	   if (connection != null) {
	    connection.close();
	   }
	  }
	  return columnValue;
	 }


}
