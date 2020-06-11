import { Injectable } from '@angular/core';

import { Sidebar } from '../models/sidebar';
import { ArticleHero } from '../models/articleHero';
import { ArticleMiddle } from '../models/articleMiddle';
import { ArticleBottom } from '../models/articleBottom';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

	public sidebar: Sidebar;
	public articleHero: ArticleHero;
	public articleMiddle: ArticleMiddle;
	public articleBottom: ArticleBottom;

  constructor() { 
  	this.sidebar = new Sidebar('Lorem ipsum dolor sit amet.', 'Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Here there is text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quia soluta incidunt reiciendis alias, eveniet, cupiditate totam animi earum obcaecati porro culpa quasi beatae eum eius laudantium sequi neque magnam in quo saepe. Eligendi sit, eaque corrupti quia ipsa nihil saepe facilis, fugit distinctio commodi veritatis error cupiditate labore blanditiis, recusandae optio. Odit eaque voluptate nesciunt omnis. Iure nihil quidem ad ea earum, quaerat explicabo officia, repellendus assumenda non fugiat blanditiis doloremque saepe neque, facere alias debitis unde ex voluptatibus minus eum. Culpa, totam. Quibusdam similique illum distinctio sed rem iusto suscipit commodi, id, consequatur hic, modi laudantium veniam. Molestiae ipsum distinctio, incidunt aliquam aut nihil earum laboriosam cupiditate aperiam rem dicta eum fugit quidem totam cumque obcaecati libero, perferendis soluta quia neque, quod, voluptatem vel doloribus. Temporibus sit nemo accusamus ratione nisi aliquam fugiat, nulla repudiandae delectus neque sed, deserunt vero exercitationem vitae iusto, minima quis facere sint enim dolores at porro mollitia. Quae quas neque aut, iusto odio asperiores commodi temporibus accusantium voluptatibus, nesciunt nam, corporis velit nisi sequi eius inventore fuga porro, assumenda deleniti molestias magni reiciendis! Molestias temporibus minus vero maiores officia provident, quidem commodi quasi veritatis, necessitatibus voluptatibus. Dolorum maiores nemo nobis est harum et sapiente soluta obcaecati alias natus, at, quod aut asperiores quibusdam illum adipisci voluptates porro itaque in enim error? Rem tenetur nemo cupiditate, illo dolor assumenda doloribus, iusto repellendus eligendi dolorem cum ad provident beatae iure illum. Minus laudantium ea quibusdam at laboriosam delectus recusandae odit dolorum ut iusto non tempore, repellat maiores voluptatum, repellendus et quis quod, odio quae repudiandae. Aperiam, ipsa a, at eum ipsum, numquam minus iure autem iusto ratione veniam accusamus rem libero perspiciui harum perferendis voluptate incidunt. Iste debitis praesentium itaque necessitatibu');

  	this.articleHero = new ArticleHero('https://i.insider.com/57741e5a88e4a77c708b4961?width=1100&format=jpeg&auto=webp', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, placeat!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consectetur possimus sed ad reprehenderit aperiam eveniet, consequatur officia unde, ut cum, aliquam beatae dolores mollitia velit quidem, non suscipit sapiente!')

	  this.articleMiddle = new ArticleMiddle('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', ' Lorem ipsum ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut nesciunt quae, nobis maxime nisi. Odio itaque molestiae, possimus sit numquam in at eum quas accusamus provident, consequuntur libero. Ut ipsam, dolores commodi corporis porro iure officia ea odio eaque quisquam at obcaecati accusantium labore asperiores pariatur, iste nulla rem.' , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut nesciunt quae, nobis maxime nisi. Odio itaque molestiae, possimus sit numquam in at eum quas accusamus provident, consequuntur libero. Ut ipsam, dolores commodi corporis porro iure officia ea odio eaque quisquam at obcaecati accusantium labore asperiores pariatur, iste nulla rem.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis modi excepturi tempora sint suscipit repellat at, fuga, dicta laudantium quos alias molestias assumenda iusto dignissimos quam possimus consequatur molestiae facere est architecto ipsam officiis aliquam quaerat sequi illum! Quia sed ratione laborum hic cupiditate assumenda, tempora nihil quaerat, nisi quidem officiis provident est earum consectetur!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut nesciunt quae, nobis maxime nisi. Odio itaque molestiae, possimus sit numquam in at eum quas accusamus provident, consequuntur libero. Ut ipsam, dolores commodi corporis porro iure officia ea odio eaque quisquam at obcaecati accusantium labore asperiores pariatur, iste nulla rem.');

	  this.articleBottom = new ArticleBottom('Lorem ipsum dolor sit amet, consectetur adipisicing elit ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci vel, enim cumque ea, reiciendis consequuntur libero deleniti suscipit. Id voluptates eligendi delectus illo odit quos! Vero tempora alias voluptates at minus ipsum aliquid blanditiis laboriosam magnam, dolorum similique facilis harum animi ipsam, fugiat? Fugit pariatur eaque cum quisquam repellat iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci vel, enim cumque ea, reiciendis consequuntur libero deleniti suscipit. Id voluptates eligendi delectus illo odit quos! Vero tempora alias voluptates at minus ips um aliquid blanditiis laboriosam magnam, dolorum similique facilis harum animi ipsam, fugiat? Fugit pariatur eaque cum quisquam repellat iste', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg/1200px-William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg');
  }



  getSidebar():Sidebar {
  	return this.sidebar;
  }

  getArticleHero():ArticleHero {
  	return this.articleHero;
  }

  getArticleMiddle():ArticleMiddle {
  	return this.articleMiddle;
  }

  getArticleBottom():ArticleBottom {
  	return this.articleBottom;
  }

}
