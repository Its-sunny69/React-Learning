import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index"
import appwriteservice from "../../appwrite/config"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteservice.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteservice.deleteFile(post.featureImage)
            }

            const dbPost = await appwriteservice.updatePost(post.$id, {
                ...data,
                featureImage: file ? file.$id : undefined,
            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }

        } else {
            const file = await appwriteservice.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id;
                data.featureImage = fileId
                const dbPost = await appwriteservice.createPost({
                    ...data,
                    userId: userData.$id,
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }

        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, {
                    shouldValidate: true
                }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} classname="">
            <div>
                <Input
                    label="Title :"
                    placeholder="Title"
                    classname=""
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    classname=""
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE
                    label="Content"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div>
                <Input
                    label="Featured Image"
                    type="file"
                    className=""
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div>
                        <img
                            src={appwriteservice.getFilePreview(post.featureImage)}
                            alt={post.title}
                        />
                    </div>
                )}
                <Select
                    options={['active', 'inactive']}
                    label='Status'
                    className=""
                    {...register('status', { required: true })}
                />
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm