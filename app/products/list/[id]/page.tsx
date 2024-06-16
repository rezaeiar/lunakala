import Breadcrumb from '@/app/_components/modules/Breadcrumb/Breadcrumb'
import ListTemplateContainer from '@/app/_components/templates/list/ListTemplateContainer/ListTemplateContainer'
import Suggestion from '@/app/_components/templates/list/Suggestion/Suggestion'

export default function page() {
    return (
        <div>
            <Breadcrumb />
            <Suggestion />
            <ListTemplateContainer />
        </div>
    )
}
