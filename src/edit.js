import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit() {

  const posts = useSelect( ( select ) => {
    return select( 'core' ).getEntityRecords( 'postType', 'post' );
  }, [] );

  return (
    <div { ...useBlockProps() }>
      { ! posts && 'Loading' }
      { posts && posts.length === 0 && 'No Posts' }
      { posts && posts.length > 0 && (
        <a href={ posts[ 0 ].link }>
          { posts[ 0 ].title.rendered }
        </a>
      ) }
    </div>
  );

}
