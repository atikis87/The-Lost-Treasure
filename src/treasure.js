
var minField = 5;
var maxField = 11;


function createOptions( parent )
{
    var i;
    for ( i = minField; i<=maxField; i++ )
    {
        $( '<option>' ).val( i ).html( i ).appendTo( parent );
    }
}

function placeTreasure( cols, rows )
{   
    window.treasureCoords ={ x: randomNumber(1,cols), y: randomNumber(1,rows)}    
}

function createTabelle( cols, rows )
{
    var i,j, tr;
    $( '#game table' ).remove();
    $( '<table>' ).appendTo( '#game' );
    for ( i=1; i<=rows; i++ )
	{
        tr = $( '<tr>' ).appendTo( 'table' );
        for ( j=1; j<=cols; j++ )
		{
            $( '<td>' ).data({i:i,j:j}).html('O').appendTo( tr );
        }
    }
    placeTreasure(cols, rows);
}

function initDOM()
{
    createOptions( '#cols' );
    createOptions( '#rows' );
}

function formSubmitHandler(e)
{
    e.preventDefault();
    $( this ).hide();
    createTabelle( $('#cols').val(),$('#rows').val() );
}

function tdClickHandler()
{
    var t = $(this);

    if ( t.html() != 'O' )
    {
        return
    }

    var x = t.data('j');
    var y = t.data('i');
    var r = randomNumber(1,2);


    if ( y == treasureCoords.y )
	{ 
        if ( x == treasureCoords.x )
		{
            t.html( 'X' );
			alert("You find the treasure!");
            
        }
		else if ( x < treasureCoords.x )
		{
            t.html( '→' ); 
        }
		else
		{
            t.html( '←' ); 
        }
    }
	else if ( y < treasureCoords.y )
	{ 
        if ( x == treasureCoords.x || r == 1 )
		{
            t.html( '↓' );  
        }
		else if ( x < treasureCoords.x )
		{
            t.html( '→' );   
        }
		else
		{
            t.html( '←' );  
        }
    }
	else
	{
        if ( x == treasureCoords.x || r == 1 )
		{
            t.html( '↑' );  
        }
		else if ( x < treasureCoords.x )
		{
            t.html( '→' );   
        }
		else
		{
            t.html( '←' );  
        }
    }
}


function addEventHandlers()
{
    $( 'form' ).on( 'submit', formSubmitHandler );
    $( document ).on( 'click', 'td', tdClickHandler );
}


$( document ).ready( function()
{
    initDOM();
    addEventHandlers();
}); // DOM ready