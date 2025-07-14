from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo

wp = Client('http://sydneychiropractorcbd.com.au/xmlrpc.php', 'mxd', '&CB0tTT$rp9aHV9iv7WS92$')
print(wp.call(GetPosts()))