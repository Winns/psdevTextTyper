var psdevTextTyper = function( cfg ) {
	var self = this;
	
	this.cfg = $.extend({
		$el:		$([]),
		interval:	1000,
		text:		'TEXT_NOT_SET',
		onFinish:	function() {}
	}, cfg);
	
	this._intervalObj = null;
	this.currentLetter = 0;
	
	this.setConfig = function( cfg ) {
		this.cfg = $.extend( this.cfg, cfg );
	};
	
	this.stop = function() {
		clearInterval( this._intervalObj );
	};
	
	this._reset = function() {
		this.stop();
		this.currentLetter = 0;
		this.cfg.$el.html( '' );
	};
	
	this.print = function( o ) {
		
		if (typeof o === 'object') // if o is object
			this.setConfig( o );
		else if (typeof o === 'string' && o.length > 0) // if o is string
			this.cfg.text = o;

		this._reset();
		
		this._intervalObj = setInterval(function() {
			self.cfg.$el.append( 
				self.cfg.text.charAt( self.currentLetter )
			);
			self.currentLetter++;
			
			if (self.currentLetter >= self.cfg.text.length) {
				self.stop();
				self.cfg.onFinish();
			}
		}, this.cfg.interval);
	};
};