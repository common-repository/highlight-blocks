const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {Fragment} = wp.element;
const {PanelBody, Toolbar, IconButton} = wp.components;
const {PluginSidebar, PluginSidebarMoreMenuItem} = wp.editPost;
const {registerPlugin} = wp.plugins;
const {BlockControls} = wp.editor;
const {addFilter} = wp.hooks;

const Component = () => (
    <Fragment>
        <PluginSidebarMoreMenuItem
            target="sidebar-name"
        >
            Highlight Blocks Sidebar
        </PluginSidebarMoreMenuItem>
        <PluginSidebar
            name="sidebar-name"
            title="Highlight Blocks Sidebar"
        >
            <PanelBody>
                <button className="button button-primary md-highlight-blocks">{ __('Highlight Blocks') }</button>
            </PanelBody>
        </PluginSidebar>

    </Fragment>
);

registerPlugin('plugin-name', {
    icon: 'schedule',
    render: Component,
});


// Add Block Control for Highlighted Box
addFilter('editor.BlockEdit', 'advgb/customBlockControl', function (BlockEdit) {
    return (props) => {
        const {isSelected} = props;
        return ( [
            <BlockEdit key="block-edit-custom-control" {...props} />,
            isSelected &&
            <Fragment>
                <BlockControls>
                    <Toolbar>
                        <IconButton
                            className="components-toolbar__control md-highlight-blocks-toolbar"
                            icon="schedule"
                            label={ __('Highlight Blocks') }
                        />
                    </Toolbar>
                </BlockControls>
            </Fragment>
        ] );
        return <BlockEdit {...props} />;
    }
});
