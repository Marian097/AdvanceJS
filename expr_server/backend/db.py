import sqlite3


class Database:
    def __init__(self):
        self.conexiune = sqlite3.connect("database.db")
        self.cursor = None
        
    def openDB(self):
        self.cursor = self.conexiune.cursor()
        self.cursor.execute("CREATE TABLE IF NOT EXISTS users (Name TEXT PRIMARY KEY, Email TEXT, Password TEXT)")
        self.conexiune.commit()
        
    def addUSERS(self, name, email, password):
        self.cursor.execute("INSERT INTO users VALUES (?, ?, ?)", (name, email, password))
        self.conexiune.commit()
        
    def deleteUSERS(self, name):
        self.cursor.execute("DELETE FROM users WHERE Name=?", (name,))
        self.conexiune.commit()
        
    def readUSERS(self, name):
        self.cursor.execute("SELECT * FROM users WHERE Name=?", (name,))
        rezultat = self.cursor.fetchone()
        return rezultat
        
    def updateUSERS(self, name, email, password):
        self.cursor.execute("UPDATE users SET Email=?, Password = ? WHERE Name=?", (email, password, name, ))
        self.conexiune.commit()
    
    def offDB(self):
        if self.conexiune:
            self.conexiune.close()
            
            