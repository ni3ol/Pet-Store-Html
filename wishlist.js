function save(key, value)
{
	localStorage.setItem(key, value);
	alert(key + " has been added to your wishlist");
}

function removeEntry(value)
{
	var key = value.split(',');
	key = key.join(' ');
	localStorage.removeItem(key);
	show();
}

function show() 
{
	var key = "";
	var list = "<tr><th>No.</th><th>Item</th><th>Price</th><th>Remove</th></tr>\n";
	var i = 0;
	for (i = 0; i <= localStorage.length - 1; i++) 
	{
		key = localStorage.key(i);
		list += "<tr><td>" + (i+1) + "</td>\n<td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td>\n<td><input type=button value=Remove onclick=removeEntry('" + key.split(" ") + "')></td></tr>\n";
	}
	if (list == "<tr><th>No.</th><th>Item</th><th>Price</th><th>Remove</th></tr>\n") 		
	{
		list += "<tr><td></td>\n<tr><td><i>empty</i></td>\n<td></td>\n<td></td></tr>\n";
	}
	document.getElementById('wishlist').innerHTML = list;
}

