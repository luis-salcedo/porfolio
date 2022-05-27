window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var cog_radius = 50;
    var cog_t_x = 30,
      cog_t_y = 40,
      cog_t_offset = 50.5,
      cog_l_x = 75,
      cog_l_y = 100,
      cog_l_offset = 24.25,
      cog_r_x = 533,
      cog_r_offset = 11.25;
    var chain = {
      offset: 0,
      paint: function() {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(533, 50);
        ctx.arc(533, 100, 50, (Math.PI * 1.5), (Math.PI * 0.5), false);
        ctx.lineTo(75, 150);
        ctx.arc(75, 100, 50, (Math.PI * 0.5), (Math.PI * 1.5), false);
        // ctx.arc(75, 100, 50, (Math.PI * 0.5), (Math.PI * 1.5), false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'transparent';
        ctx.setLineDash([18, 14.16]);
        ctx.lineDashOffset = this.offset;
        ctx.fill();
        ctx.stroke();
        
      }
    };
    var cog = {
      paint: function(x, y, r, offset) {
        ctx.beginPath();
        
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.setLineDash([15, 14.16]);
        ctx.lineDashOffset = offset;
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, (r - 10), 0, Math.PI * 2, true);
        ctx.arc(x, y, (r / 1.5), 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'silver';
        ctx.fill('evenodd');
      }
    };
  
    function paint(type) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      chain.offset += (10.54 / 10); //Chain Speed
      cog_l_offset -= (6.54 / 10); //Metal size /speed
      cog_r_offset -= (6.54 / 10);
      cog_t_offset += (15.54 / 10);
      ctx.save();
      cog.paint(cog_t_x, cog_t_y, (cog_radius / 2), cog_t_offset);
      ctx.restore();
      ctx.save();
      chain.paint();
      ctx.restore();
      ctx.save();
      cog.paint(cog_l_x, cog_l_y, cog_radius, cog_l_offset);
      ctx.restore();
      ctx.save();
      cog.paint(cog_r_x, cog_l_y, cog_radius, cog_r_offset);
      ctx.restore();
      
      
// Writing
        // ctx.fillStyle = 'pink';
        ctx.font = '18pt Calibri';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.strokeText('Hello, I am a Software Engineer', 153, 95);
        ctx.strokeText('based in the United States!', 171, 120);
        ctx.strokeStyle = 'green';

      if (type) {
        anim = window.requestAnimationFrame(function() {
          paint(type);
        })
      }
    }
    paint(true);
  }


  