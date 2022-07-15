<script lang="ts" setup>
import { LayIcon } from "@layui/layui-vue"
import { ref } from "vue";

const selectedKey20 = ref("15");
const openKeys20 = ref(["7"]);
const collapse20 = ref(false);
const isTree20 = ref(true);
</script>

<template>
    <lay-switch v-model="collapse20"></lay-switch>
    <lay-menu
        v-model:selectedKey="selectedKey20"
        theme='dark'
        :collapse-transition="true"
        v-model:tree="isTree20"
        v-model:openKeys="openKeys20"
        :collapse="collapse20"
        :level="true"
    >
        <lay-menu-item id="1">
            <template #icon>
                <lay-icon type="layui-icon-home"></lay-icon>
            </template>
            <template #title> 首页 </template>
        </lay-menu-item>
        <lay-menu-item id="2">
            <template #icon>
                <lay-icon type="layui-icon-home"></lay-icon>
            </template>
            <template #title> 首页 </template>
        </lay-menu-item>
        <lay-sub-menu id="3">
            <template #icon><lay-icon type="layui-icon-home"></lay-icon></template>
            <template #title> 首页 </template>
            <lay-menu-item id="4">
                <template #title>首页</template>
            </lay-menu-item>
            <lay-menu-item id="5">
                <template #title>菜单一</template>
            </lay-menu-item>
            <lay-sub-menu id="6">
                <template #title>首页</template>
                <lay-menu-item id="7">
                    <template #title>首页</template>
                </lay-menu-item>
                <lay-menu-item id="8">
                    <template #title>首页</template>
                </lay-menu-item>
                <lay-sub-menu id="9">
                    <template #title>首页</template>
                    <lay-menu-item id="10">
                        <template #title>首页</template>
                    </lay-menu-item>
                    <lay-menu-item id="11">
                        <template #title>首页</template>
                    </lay-menu-item>
                    <lay-menu-item id="12">
                        <template #title>首页</template>
                    </lay-menu-item>
                </lay-sub-menu>
            </lay-sub-menu>
        </lay-sub-menu>
        <lay-sub-menu id="13">
            <template #icon>
                <lay-icon type="layui-icon-home"></lay-icon>
            </template>
            <template #title> 首页 </template>
            <lay-menu-item id="14">
                <template #icon>
                    <lay-icon type="layui-icon-home"></lay-icon>
                </template>
                <template #title> 首页 </template>
            </lay-menu-item>
            <lay-menu-item id="15">
                <template #icon>
                    <lay-icon type="layui-icon-home"></lay-icon>
                </template>
                <template #title> 首页 </template>
            </lay-menu-item>
            <lay-sub-menu id="16">
                <template #icon>
                    <lay-icon type="layui-icon-home"></lay-icon>
                </template>
                <template #title> 首页 </template>
                <lay-menu-item id="17">
                    <template #icon>
                        <lay-icon type="layui-icon-home"></lay-icon>
                    </template>
                    <template #title> 首页 </template>
                </lay-menu-item>
                <lay-menu-item id="18">
                    <template #icon>
                        <lay-icon type="layui-icon-home"></lay-icon>
                    </template>
                    <template #title> 首页 </template>
                </lay-menu-item>
                <lay-sub-menu id="19">
                    <template #icon>
                        <lay-icon type="layui-icon-home"></lay-icon>
                    </template>
                    <template #title> 首页 </template>
                    <lay-menu-item id="20">
                        <template #icon>
                            <lay-icon type="layui-icon-home"></lay-icon>
                        </template>
                        <template #title> 首页 </template>
                    </lay-menu-item>
                    <lay-menu-item id="21">
                        <template #icon>
                            <lay-icon type="layui-icon-home"></lay-icon>
                        </template>
                        <template #title> 首页 </template>
                    </lay-menu-item>
                    <lay-menu-item id="22">
                        <template #icon>
                            <lay-icon type="layui-icon-home"></lay-icon>
                        </template>
                        <template #title> 首页 </template>
                    </lay-menu-item>
                </lay-sub-menu>
            </lay-sub-menu>
        </lay-sub-menu>
    </lay-menu>
</template>
