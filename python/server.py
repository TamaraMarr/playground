import socket
import sys
import threading

class ServerThread(threading.Thread):
    def __init__(self, connection):
        super().__init__()
        self.connection = connection

    def run(self):
        connection = self.connection
        try:
            print('connection from {}'.format(client_address))
            while True:
                data = connection.recv(16)
                print('received {}'.format(data))
                if data is not None:
                    connection.sendall('Received {}'.format(data).encode('UTF-8'))                    
                else:
                    print('No more data from client')
                    break

            command = 'add 2 5'
            command = command.split(' ')
            
            op = command[0]
            if command[0] == 'add':
                res = int(command[1]) + int(command[2])
            elif command[0] == 'sub':
                res = int(command[1]) + int(command[2])
            else:
                res = None                

        except Exception as e:
            print(e)
            
        finally:
            connection.close()

if __name__ == '__main__':
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_address = ('0.0.0.0', 8000)
    sock.bind(server_address)

    sock.listen(5)

    while True:
        print('waiting')
        connection, client_address = sock.accept()
        worker = ServerThread(connection)
        worker.start()



@path('/home.html', method=['GET'])
def home():
    username = req['username']

    return render_template('home.html', username=username)

@path('/get_tick', method = ['GET'])
def tick():
    return 
s
